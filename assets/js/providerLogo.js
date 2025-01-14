class ProviderLogo {
    constructor(containerId, speed = 1) {
        this.container = document.getElementById(containerId);
        this.speed = speed;
        this.logos = [];
        this.init();
    }

    async init() {
        try {
            const logoPath = 'assets/images/provider_logo/';
            this.logos = [
                'ai360-color.svg',
                'aimass-color.svg',
                'anthropic.svg',
                'azure-color.svg',
                'baichuan-color.svg',
                'baiducloud-color.svg',
                'bytedance-color.svg',
                'deepseek-color.svg',
                "github.svg",
                "google-color.svg",
                "groq.svg",
                "higress-color.svg",
                "huggingface-color.svg",
                "hunyuan-color.svg",
                "meta-color.svg",
                "minimax-color.svg",
                "mistral-color.svg",
                "moonshot.svg",
                "nvidia-color.svg",
                "ollama.svg",
                "openai.svg",
                "openrouter.svg",
                "qwen-color.svg",
                "siliconcloud-color.svg",
                "spark-color.svg",
                "stepfun-color.svg",
                "together-color.svg",
                "xai.svg",
                "zeroone.svg",
                "zhipu-color.svg"
            ].map(logo => `${logoPath}${logo}`);

            if (this.logos.length > 0) {
                this.createScrollContainer();
                this.startScroll();
            }
        } catch (error) {
            console.error('初始化provider logo失败:', error);
        }
    }

    createScrollContainer() {
        this.container.innerHTML = '';
        
        const wrapper = document.createElement('div');
        wrapper.className = 'logo-wrapper';
        
        const track = document.createElement('div');
        track.className = 'logo-track';
        
        // 创建足够多的副本以确保滚动流畅
        const itemWidth = 380; // logo项的估计宽度(包含padding)
        const containerWidth = this.container.offsetWidth;
        const copiesNeeded = Math.ceil((containerWidth * 1) / (itemWidth * this.logos.length));
        
        for (let i = 0; i < copiesNeeded; i++) {
            this.logos.forEach(logo => {
                const logoBox = document.createElement('div');
                logoBox.className = 'logo-box';
                
                const img = document.createElement('img');
                img.src = logo;
                img.alt = 'Provider Logo';
                // 添加加载错误处理
                img.onerror = () => {
                    console.log(`Failed to load: ${logo}`);
                    logoBox.style.display = 'none';
                };
                
                logoBox.appendChild(img);
                track.appendChild(logoBox);
            });
        }
        
        wrapper.appendChild(track);
        this.container.appendChild(wrapper);
        
        this.addStyles();
    }

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .logo-wrapper {
                width: 100%;
                overflow: hidden;
                position: relative;
                padding: 20px 0;
            }

            .logo-track {
                display: flex;
                align-items: center;
                animation: scroll ${60/this.speed}s linear infinite;
                width: fit-content;
            }

            .logo-box {
                flex: 0 0 auto;
                padding: 0 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 140px;
                height: 112px;
            }

            .logo-box img {
                height: 63px;
                min-width: 63px;
                width: auto;
                object-fit: contain;
                opacity: 0.85;
                transition: all 0.3s ease;
            }

            .logo-box img:hover {
                opacity: 1;
                transform: scale(1.15);
            }

            @keyframes scroll {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }

            .logo-track:hover {
                animation-play-state: paused;
            }
        `;
        
        document.head.appendChild(style);
    }

    startScroll() {
        const track = this.container.querySelector('.logo-track');
        track.addEventListener('animationend', () => {
            track.style.animation = 'none';
            track.offsetHeight;
            track.style.animation = `scroll ${30/this.speed}s linear infinite`;
        });
    }
} 