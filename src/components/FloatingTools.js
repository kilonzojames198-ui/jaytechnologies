'use client'
import { useEffect, useRef } from 'react'

const tools = [
  { label: '</>', category: 'web', size: 34 },
  { label: '</>', category: 'web', size: 24 },
  { label: '</>', category: 'web', size: 28 },
  { label: 'HTML', category: 'web', size: 22 },
  { label: 'HTML', category: 'web', size: 18 },
  { label: 'CSS', category: 'web', size: 22 },
  { label: 'CSS', category: 'web', size: 16 },
  { label: 'PHP', category: 'web', size: 24 },
  { label: 'PHP', category: 'web', size: 18 },
  { label: 'JS', category: 'web', size: 30 },
  { label: 'JS', category: 'web', size: 20 },
  { label: '{ }', category: 'web', size: 32 },
  { label: '{ }', category: 'web', size: 22 },
  { label: '<div>', category: 'web', size: 20 },
  { label: '<div>', category: 'web', size: 16 },
  { label: 'API', category: 'web', size: 26 },
  { label: 'API', category: 'web', size: 18 },
  { label: 'SQL', category: 'web', size: 22 },
  { label: 'SQL', category: 'web', size: 16 },
  { label: '<html>', category: 'web', size: 20 },
  { label: 'MySQL', category: 'web', size: 20 },
  { label: 'JSON', category: 'web', size: 22 },
  { label: 'JSON', category: 'web', size: 16 },
  { label: 'HTTP', category: 'web', size: 20 },
  { label: 'GET', category: 'web', size: 22 },
  { label: 'POST', category: 'web', size: 20 },
  { label: 'DOM', category: 'web', size: 24 },
  { label: 'npm', category: 'web', size: 22 },
  { label: 'git', category: 'web', size: 24 },
  { label: 'git', category: 'web', size: 18 },
  { label: '[ ]', category: 'web', size: 30 },
  { label: '=>', category: 'web', size: 28 },
  { label: '=>', category: 'web', size: 20 },
  { label: '&&', category: 'web', size: 26 },
  { label: '<?php', category: 'web', size: 18 },
  { label: 'https://', category: 'web', size: 16 },
  { label: 'import', category: 'web', size: 18 },
  { label: 'async', category: 'web', size: 20 },
  { label: 'function', category: 'web', size: 17 },
  { label: 'const', category: 'web', size: 20 },
  { label: 'const', category: 'web', size: 15 },
  { label: 'var', category: 'web', size: 22 },
  { label: 'return', category: 'web', size: 18 },
  { label: 'class', category: 'web', size: 20 },
  { label: 'fetch()', category: 'web', size: 18 },
  { label: 'new', category: 'web', size: 22 },
  { label: 'if()', category: 'web', size: 22 },
  { label: '( )', category: 'web', size: 26 },
  { label: 'Aa', category: 'design', size: 30 },
  { label: 'Aa', category: 'design', size: 20 },
  { label: '✦', category: 'design', size: 28 },
  { label: '✦', category: 'design', size: 18 },
  { label: '◈', category: 'design', size: 26 },
  { label: 'RGB', category: 'design', size: 20 },
  { label: '⬡', category: 'design', size: 28 },
  { label: '▲', category: 'design', size: 24 },
  { label: '◉', category: 'design', size: 26 },
  { label: 'SVG', category: 'design', size: 20 },
  { label: 'PSD', category: 'design', size: 20 },
  { label: '#ff0', category: 'design', size: 16 },
  { label: '★', category: 'brand', size: 28 },
  { label: '★', category: 'brand', size: 20 },
  { label: '◎', category: 'brand', size: 26 },
  { label: 'LOGO', category: 'brand', size: 20 },
  { label: '⬟', category: 'brand', size: 26 },
  { label: '™', category: 'brand', size: 26 },
  { label: '❖', category: 'brand', size: 24 },
  { label: 'BRAND', category: 'brand', size: 16 },
]

const colors = { web: '#fbbf24', design: '#38bdf8', brand: '#a78bfa' }

export default function FloatingTools() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }

    function spawn(tool) {
      return {
        label: tool.label,
        color: colors[tool.category],
        fontSize: tool.size,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.4 + 0.6,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.005 + Math.random() * 0.008,
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        p.pulse += p.pulseSpeed
        if (p.x < -40) p.x = window.innerWidth + 40
        if (p.x > window.innerWidth + 40) p.x = -40
        if (p.y < -40) p.y = window.innerHeight + 40
        if (p.y > window.innerHeight + 40) p.y = -40
        const a = p.alpha * (0.75 + 0.25 * Math.sin(p.pulse))
        ctx.save()
        ctx.globalAlpha = a
        ctx.fillStyle = p.color
        ctx.font = `600 ${p.fontSize}px 'Syne', sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(p.label, p.x, p.y)
        ctx.restore()
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    particles = tools.map(spawn)
    draw()

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return <canvas ref={canvasRef} className="tools-canvas" />
}
