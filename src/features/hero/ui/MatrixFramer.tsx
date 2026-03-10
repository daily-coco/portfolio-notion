import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

type IconItem = {
  label: string;
  texture: string;
  width?: number;
  height?: number;
};

type FallingIconsMatterProps = {
  icons: IconItem[];
  height?: number;
  background?: string;
};

export default function FallingIconsMatter({
  icons,
  height = 520,
  background = 'transparent',
}: FallingIconsMatterProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const bodiesRef = useRef<Matter.Body[]>([]);
  const cleanupTimersRef = useRef<number[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const worldHeight = height;

    const engine = Matter.Engine.create();
    engine.gravity.y = 1.0;
    engineRef.current = engine;

    const render = Matter.Render.create({
      element: container,
      engine,
      options: {
        width,
        height: worldHeight,
        wireframes: false,
        background,
        pixelRatio: window.devicePixelRatio || 1,
      },
    });
    renderRef.current = render;

    const runner = Matter.Runner.create();
    runnerRef.current = runner;

    const wallThickness = 80;

    const floor = Matter.Bodies.rectangle(
      width / 2,
      worldHeight + wallThickness / 2,
      width + wallThickness * 2,
      wallThickness,
      {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }
    );

    const leftWall = Matter.Bodies.rectangle(
      -wallThickness / 2,
      worldHeight / 2,
      wallThickness,
      worldHeight * 2,
      {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }
    );

    const rightWall = Matter.Bodies.rectangle(
      width + wallThickness / 2,
      worldHeight / 2,
      wallThickness,
      worldHeight * 2,
      {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }
    );

    const topWall = Matter.Bodies.rectangle(
      width / 2,
      -wallThickness / 2,
      width + wallThickness * 2,
      wallThickness,
      {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }
    );

    Matter.World.add(engine.world, [floor, leftWall, rightWall, topWall]);

    // 마우스 드래그
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Matter.World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // 아이콘 순차적으로 떨어뜨리기
    icons.forEach((icon, index) => {
      const timer = window.setTimeout(() => {
        const bodyWidth = icon.width ?? 56;
        const bodyHeight = icon.height ?? 56;

        const x = 80 + Math.random() * Math.max(40, width - 160);
        const y = -100 - index * 20;

        const body = Matter.Bodies.rectangle(x, y, bodyWidth, bodyHeight, {
          restitution: 0.75, // 튕김
          friction: 0.2,
          frictionAir: 0.015,
          density: 0.002,
          chamfer: { radius: 12 },
          render: {
            sprite: {
              texture: icon.texture,
              xScale: bodyWidth / 512, // 원본 이미지 크기에 맞게 조정 필요
              yScale: bodyHeight / 512,
            },
          },
        });

        // sprite 원본 크기가 512가 아닐 수 있으므로
        // 실제 사용하는 아이콘 파일 기준으로 아래처럼 자동 보정 추천
        // 지금은 예시용으로 512 기준

        bodiesRef.current.push(body);
        Matter.World.add(engine.world, body);
      }, index * 220);

      cleanupTimersRef.current.push(timer);
    });

    Matter.Render.run(render);
    Matter.Runner.run(runner, engine);

    // 리사이즈 대응
    const handleResize = () => {
      if (!containerRef.current || !renderRef.current || !engineRef.current)
        return;

      const newWidth = containerRef.current.clientWidth;
      const currentRender = renderRef.current;

      currentRender.canvas.width = newWidth;
      currentRender.canvas.style.width = `${newWidth}px`;
      currentRender.options.width = newWidth;

      // 기존 static wall 제거 후 재생성
      const allBodies = Matter.Composite.allBodies(engine.world);
      const staticWalls = allBodies.filter((body) => body.isStatic);
      Matter.World.remove(engine.world, staticWalls);

      const newFloor = Matter.Bodies.rectangle(
        newWidth / 2,
        worldHeight + wallThickness / 2,
        newWidth + wallThickness * 2,
        wallThickness,
        {
          isStatic: true,
          render: { fillStyle: 'transparent' },
        }
      );

      const newLeftWall = Matter.Bodies.rectangle(
        -wallThickness / 2,
        worldHeight / 2,
        wallThickness,
        worldHeight * 2,
        {
          isStatic: true,
          render: { fillStyle: 'transparent' },
        }
      );

      const newRightWall = Matter.Bodies.rectangle(
        newWidth + wallThickness / 2,
        worldHeight / 2,
        wallThickness,
        worldHeight * 2,
        {
          isStatic: true,
          render: { fillStyle: 'transparent' },
        }
      );

      const newTopWall = Matter.Bodies.rectangle(
        newWidth / 2,
        -wallThickness / 2,
        newWidth + wallThickness * 2,
        wallThickness,
        {
          isStatic: true,
          render: { fillStyle: 'transparent' },
        }
      );

      Matter.World.add(engine.world, [
        newFloor,
        newLeftWall,
        newRightWall,
        newTopWall,
      ]);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      cleanupTimersRef.current.forEach((timer) => {
        window.clearTimeout(timer);
      });
      cleanupTimersRef.current = [];

      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);

      if (render.canvas && render.canvas.parentNode) {
        render.canvas.parentNode.removeChild(render.canvas);
      }

      render.textures = {};
      bodiesRef.current = [];
    };
  }, [icons, height, background]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: `${height}px`,
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '24px',
      }}
      aria-label='프로그램 아이콘 물리 애니메이션 영역'
    />
  );
}
