import React from 'react';
import { Button, Container } from 'react-bootstrap';

type HomeHeaderProps = {
    targetRef: React.RefObject<HTMLDivElement>;
};

const HomeHeader: React.FC<HomeHeaderProps> = ({ targetRef }) => {

    const customButtonStyle: React.CSSProperties = {
        color: '#FFFFFF',
        background: 'linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
        borderColor: '#FFFFFF',
        borderRadius: '25px',
        padding: '12px 20px',
        fontSize: '16px',
        fontWeight: '600',
        textTransform: 'uppercase',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backfaceVisibility: 'hidden',
        willChange: 'transform',
        margin: '0 auto', // Center button horizontally
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        userSelect: 'none',
        textDecoration: 'none',
        letterSpacing: '1px',
        border: '2px solid',
        width: '100%',
    };

    const headerTextStyle: React.CSSProperties = {
        fontFamily: "'Cairo', sans-serif",
        color: '#FFFFFF',
        textAlign: 'center', // Ensure text is centered
    };

    const handleMouseOver = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.currentTarget.style.transform = 'translateY(-2px)';
        event.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
    };

    const handleMouseOut = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.currentTarget.style.transform = 'translateY(0)';
        event.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    };

    const scrollToTarget = () => {
        targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <header className="header d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container className="h-100 d-flex align-items-center justify-content-right">
                <div className="text-center"> {/* Ensure this div and its children are centered */}
                    <h2 style={headerTextStyle}>
                        هدفنا تخفيف آلامكم
                        <span className="d-block">
                            ليزداد نشاطكم
                        </span>
                    </h2>
                    <Button
                        style={customButtonStyle}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onClick={scrollToTarget}
                    >
                        تواصل معنا عن طريق تعبئة النموذج
                        <i className="ms-2 ti-arrow-right" />
                    </Button>
                </div>
            </Container>
        </header>
    );
}

export default HomeHeader;
