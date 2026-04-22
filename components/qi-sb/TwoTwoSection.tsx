import Image from 'next/image'

export default function TwoTwoSection() {
  return (
    <section id="two-two" style={{ background: '#5DA5B5', position: 'relative', overflow: 'hidden' }}>
      {/* Ghost word */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: '-10px',
          top: '20px',
          fontFamily: 'var(--f-impact)',
          fontWeight: 700,
          fontSize: 'clamp(100px,15vw,200px)',
          color: 'rgba(255,255,255,0.07)',
          lineHeight: 1,
          letterSpacing: '-0.01em',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        TWO TWO
      </div>

      <div
        className="wrap"
        style={{
          paddingTop: 'clamp(80px,10vw,120px)',
          paddingBottom: 'clamp(80px,10vw,120px)',
          paddingLeft: 'clamp(48px,8vw,120px)',
          paddingRight: 'clamp(48px,8vw,120px)',
        }}
      >
        <div
          className="flex flex-col md:grid"
          style={{ gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}
        >
          {/* Left: name + bio */}
          <div>
            <h2
              className="tr-d2"
              style={{
                fontFamily: 'var(--f-zh-sans)',
                fontWeight: 900,
                fontSize: 'clamp(28px,4vw,48px)',
                color: '#fff',
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              禿禿 TWO TWO
            </h2>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
              {['頌缽', '薩滿', '能量定頻'].map(r => (
                <span
                  key={r}
                  style={{
                    fontFamily: 'var(--f-display)',
                    fontSize: 'clamp(13px, 1.2vw, 15px)',
                    letterSpacing: '0.14em',
                    color: 'rgba(255,255,255,1)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 999,
                    padding: '4px 14px',
                  }}
                >
                  {r}
                </span>
              ))}
            </div>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.9,
                color: 'rgba(255,255,255,1)',
                marginBottom: 20,
              }}
            >
              以聲音為媒介，禿禿的工作是進入你看不見的地方，把東西帶回來。
            </p>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.85,
                color: 'rgba(255,255,255,1)',
              }}
            >
              多年的頌缽訓練與薩滿修習，讓她能夠精準感知能量阻塞，並以頌缽頻率、音叉與薩滿技術，協助主體重新定頻。身心狀態、潛意識模式、靈魂碎片——她都去過。
            </p>
          </div>

          {/* Right: 吉祥物禿 */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              src="/index/吉祥物禿.png"
              alt="禿禿"
              width={400}
              height={400}
              style={{
                width: 'clamp(180px,28vw,340px)',
                height: 'auto',
                opacity: 0.92,
                filter: 'drop-shadow(0 0 28px rgba(90,165,178,0.32))',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
