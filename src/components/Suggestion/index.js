/* eslint-disable jsx-a11y/alt-text */
import './style.css'

export function Suggestion() {
    return (
        <div className="container-suggestion">
            <div className="header-suggestion" >
                <img src="https://media.discordapp.net/attachments/848597846353510403/1031351117088567399/unknown.png?width=408&height=408" />

                <div className="user-infos-suggestion" >

                    <div className="infos" >
                        <span>KittyCat</span>
                        <p>Kauã Melo</p>
                    </div>

                    <button className="switch" >Mudar</button>

                </div>
            </div>

            <div className="header-main-suggestion" >

                <p>Sugestões para você</p>

                <span>Ver tudo</span>

            </div>

            <div className="user-suggestion" >
                <div className="infos-suggestion">
                <img src="https://i.pinimg.com/564x/91/96/b1/9196b139d563295de9173ccd15d62696.jpg" />
                    <div className="info-suggestion" >
                        <span>CuteCat$</span>
                        <p>Seguido por Gatxx_</p>
                    </div>
                    <button className='follow' >Seguir</button>
                </div>
            </div>
            <div className="user-suggestion" >
                <div className="infos-suggestion">
                <img src="https://i.pinimg.com/564x/4b/cd/90/4bcd904941268d5b31577e07df2233f3.jpg" />
                    <div className="info-suggestion" >
                        <span>Catzola</span>
                        <p>Seguido por Gatxx_</p>
                    </div>
                    <button className='follow' >Seguir</button>
                </div>
            </div>
            <div className="user-suggestion" >
                <div className="infos-suggestion">
                <img src="https://i.pinimg.com/564x/1a/32/ba/1a32ba1efb86fcf0ca1d733177d07a34.jpg" />
                    <div className="info-suggestion" >
                        <span>Rogercat</span>
                        <p>Seguido por Gatxx_</p>
                    </div>
                    <button className='follow' >Seguir</button>
                </div>
            </div>
            <div className="user-suggestion" >
                <div className="infos-suggestion">
                <img src="https://i.pinimg.com/564x/7e/aa/8d/7eaa8de84c0f67f2166484e39212d1a8.jpg" />
                    <div className="info-suggestion" >
                        <span>DunkCat</span>
                        <p>Seguido por Gatxx_</p>
                    </div>
                    <button className='follow' >Seguir</button>
                </div>
            </div>
            <div className="user-suggestion" >
                <div className="infos-suggestion">
                <img src="https://i.pinimg.com/564x/49/5a/6c/495a6cead227ac0c7c7dfee9063322f8.jpg" />
                    <div className="info-suggestion" >
                        <span>HyperCat</span>
                        <p>Seguido por Gatxx_</p>
                    </div>
                    <button className='follow' >Seguir</button>
                </div>
            </div>



            <footer className="footer-suggestion" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2021 INSTAGRAM FROM META</p>

            </footer>
        </div>
    )
}