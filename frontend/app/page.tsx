export function Home() {
    return (
        <div className="page">
            {/* NAVBAR */}
            <header className="navbar">
                {/* Левая часть — логотип */}
                <div className="navbar-left">
                    <div className="logo">
                        <span className="logo-main">AGAI</span>
                        <span className="logo-sub">Academy & Community</span>
                    </div>
                </div>

                {/* Центр — ссылки */}
                <nav className="navbar-center">
                    <a href="#" className="nav-link active">
                        Home
                    </a>
                    <a href="#" className="nav-link">
                        Courses
                    </a>
                    <a href="#" className="nav-link">
                        Community
                    </a>
                    <a href="#" className="nav-link">
                        About
                    </a>
                </nav>

                {/* Правая часть — язык + кнопки */}
                <div className="navbar-right">
                    <div className="lang-switcher">
                        <button className="lang-btn active">KG</button>
                        <span className="lang-sep">/</span>
                        <button className="lang-btn">RU</button>
                        <span className="lang-sep">/</span>
                        <button className="lang-btn">EN</button>
                    </div>

                    <div className="nav-actions">
                        <button className="btn btn-ghost">Log in</button>
                        <button className="btn btn-primary">Sign up</button>
                    </div>
                </div>
            </header>

            {/* КОНТЕНТ СТРАНИЦЫ (пока простой заглушка) */}
            <main className="main">
                <section className="hero">
                    <h1 className="hero-title">Welcome to AGAI</h1>
                    <p className="hero-subtitle">
                        Здесь будет твоя платформа для обучения программированию и развития
                        молодёжи. Дальше мы добавим блоки: курсы, комьюнити, прогресс.
                    </p>
                    <p>
                        AGAI
                    </p>
                    <p>
                        Здесь будет твоя платформа для обучения программированию и развития
                        молодёжи. Дальше мы добавим блоки: курсы, комьюнити, прогресс.
                    </p>

                    <p>

                        Здесь будет твоя платформа для обучения программированию и развития
                        молодёжи. Дальше мы добавим блоки: курсы, комьюнити, прогресс.
                    </p>
                    <p>

                        Здесь будет твоя платформа для обучения программированию и развития
                        молодёжи. Дальше мы добавим блоки: курсы, комьюнити, прогресс.
                    </p>
                    <p>

                        Здесь будет твоя платформа для обучения программированию и развития
                        молодёжи. Дальше мы добавим блоки: курсы, комьюнити, прогресс.
                    </p>
                </section>
            </main>
        </div>
    );
}
