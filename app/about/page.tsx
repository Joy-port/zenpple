import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '關於森波 · ZENPPLE',
  description: '森波由禿禿 TWO TWO 與夏共同創立，是意識邊界校準場。',
}

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 'clamp(120px,15vw,180px) clamp(24px,5vw,72px) clamp(60px,8vw,100px)',
          background: 'var(--base)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="wrap" style={{ width: '100%' }}>
          <p className="sec-label">關於</p>
          <h1
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(36px,6vw,68px)',
              lineHeight: 1.1,
              letterSpacing: '0.03em',
              marginBottom: 24,
            }}
          >
            森波
          </h1>
          <p
            style={{
              fontFamily: 'var(--f-display)',
              fontWeight: 100,
              fontSize: 13,
              letterSpacing: '0.3em',
              color: 'var(--ink)',
              opacity: 0.5,
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            ZENPPLE · Consciousness Calibration Field
          </p>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.9,
              color: 'var(--muted)',
              maxWidth: 560,
            }}
          >
            不是疏導，不是安慰——是陪你找到你自己的頻率，讓主體站穩。
            森波是意識邊界校準場，以聲音、薩滿與深層能量對齊為方法，協助你走回自己。
          </p>
        </div>
      </section>

      {/* FOUNDERS */}
      <section
        style={{
          padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)',
          background: 'var(--base)',
        }}
      >
        <div className="wrap">
          <p className="sec-label">創辦人</p>
          <h2
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(24px,3.5vw,40px)',
              letterSpacing: '0.03em',
              marginBottom: 52,
            }}
          >
            兩個不同的方向，同一個根。
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            {[
              {
                name: '禿禿 TWO TWO',
                roles: ['頌缽', '薩滿', '能量定頻'],
                bio: '以聲音為媒介，禿禿的工作是進入你看不見的地方，把東西帶回來。多年的頌缽訓練與薩滿修習，讓她能夠精準感知能量阻塞，並以頌缽頻率、音叉與薩滿技術，協助主體重新定頻。身心狀態、潛意識模式、靈魂碎片——她都去過。',
                color: '#4A6B8A',
              },
              {
                name: '夏',
                roles: ['靈性顧問', '易經', '品牌策略'],
                bio: '夏的工作是幫你看見大局。結合易經理路、玄天上帝指引與多年數位品牌實務，夏協助靈性工作者從方向定錨到品牌落地，打通感知與現實之間的通道。她的問題通常很少，但每個都直接擊中那個點。',
                color: '#7B6B9E',
              },
            ].map(f => (
              <div
                key={f.name}
                style={{
                  padding: '40px',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  background: 'rgba(255,255,255,0.5)',
                }}
              >
                {/* Avatar placeholder */}
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: `rgba(${f.color === '#4A6B8A' ? '74,107,138' : '123,107,158'},0.1)`,
                    border: `1px solid rgba(${f.color === '#4A6B8A' ? '74,107,138' : '123,107,158'},0.2)`,
                    marginBottom: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--f-mono)',
                    fontSize: 9,
                    color: 'var(--muted)',
                  }}
                >
                  photo
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--f-zh)',
                    fontWeight: 700,
                    fontSize: 22,
                    letterSpacing: '0.04em',
                    marginBottom: 8,
                  }}
                >
                  {f.name}
                </h3>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                  {f.roles.map(r => (
                    <span
                      key={r}
                      style={{
                        fontFamily: 'var(--f-mono)',
                        fontSize: 9,
                        letterSpacing: '0.12em',
                        color: f.color,
                        padding: '4px 10px',
                        border: `1px solid ${f.color}33`,
                        borderRadius: 999,
                      }}
                    >
                      {r}
                    </span>
                  ))}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.9, color: 'var(--muted)' }}>{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAME MEANING */}
      <section
        style={{
          padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)',
          background: '#faf8f5',
        }}
      >
        <div className="wrap" style={{ maxWidth: 680, margin: '0 auto' }}>
          <p className="sec-label">品牌命名</p>
          <h2
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(24px,3.5vw,40px)',
              letterSpacing: '0.03em',
              marginBottom: 24,
            }}
          >
            為什麼是「森波」？
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--muted)', marginBottom: 20 }}>
            <strong style={{ color: 'var(--ink)' }}>森</strong>
            ——三棵樹聚在一起，形成一座森林。能量的積累需要厚度，也需要彼此。
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--muted)', marginBottom: 20 }}>
            <strong style={{ color: 'var(--ink)' }}>波</strong>
            ——頻率、振動、傳遞。頌缽的聲音是波，意識的移動也是波。
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--muted)' }}>
            <strong style={{ color: 'var(--ink)' }}>ZENPPLE</strong>
            ——ZEN（禪，靜定）+ APPLE（蘋果，意識的果實）。往內，然後生長。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: 'clamp(80px,10vw,100px) clamp(24px,5vw,72px)',
          background: 'var(--base)',
          textAlign: 'center',
        }}
      >
        <div className="wrap">
          <p
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(20px,2.5vw,30px)',
              letterSpacing: '0.04em',
              marginBottom: 36,
            }}
          >
            不確定從哪裡開始？
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--f-mono)',
              fontSize: 12,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              textDecoration: 'none',
              border: '1px solid rgba(42,42,42,0.25)',
              borderRadius: 999,
              padding: '14px 32px',
            }}
          >
            跟我們說說你的狀態 →
          </Link>
        </div>
      </section>
    </>
  )
}
