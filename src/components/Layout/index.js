import './style.css'

import { Story } from '../Story'
import { Post } from '../Post'
import { Suggestion } from '../Suggestion'

export function Layout() {

    return (
        <>

            <div className="MainGrid" >

                <div className="first-column" style={{gridArea: "firstColumn"}}>
                    <div className="box" >
                        <Story />
                    </div>

                    <div className="box" style={{margin: "30px 0"}} >
                        <Post user="richardiiisx_" icone="https://i.pinimg.com/564x/5a/c4/92/5ac492cf32894322de477839af93a6b8.jpg" curtidas="859 Curtidas" time="Há 40 minutos" legenda="Equipe top d+" imagem="https://media-exp1.licdn.com/dms/image/C4D22AQHEAy-VotjCOA/feedshare-shrink_1280/0/1665417954369?e=1669248000&v=beta&t=E9L-wtTgKn66-RsHFF9V1NCveU_n82EtFXzmHnG7zRg"/>
                    </div>

                    <div className="box" style={{margin: "30px 0"}} >
                        <Post user="KittyCat" icone="https://media.discordapp.net/attachments/848597846353510403/1031351117088567399/unknown.png?width=408&height=408" curtidas="586 Curtidas" time="Há 1 hora" legenda="Filme com a best" imagem="https://i.pinimg.com/564x/b9/09/4c/b9094c389e96aef7b3e306e84e807d80.jpg"/>
                    </div>

                    <div className="box" style={{margin: "30px 0"}} >
                        <Post user="vitoria_snts77" icone="https://i.pinimg.com/564x/59/01/04/5901040f4dcbcd66cb9739dbb40a98b7.jpg" curtidas="915 Curtidas" time="Há 2 horas" legenda="Adoro esse menino!" imagem="https://i.pinimg.com/564x/85/9e/6a/859e6aae92abf036bb77e78006525423.jpg"/>
                    </div>

                    <div className="box" style={{margin: "30px 0"}} >
                        <Post user="KittyCat" icone="https://media.discordapp.net/attachments/848597846353510403/1031351117088567399/unknown.png?width=408&height=408" curtidas="995 Curtidas" time="Há 5 horas" legenda="Fofinho d+" imagem="https://i.pinimg.com/564x/14/7a/ec/147aec9f1bb6c4586b718a0ace9121ca.jpg"/>
                    </div>

                    <div className="box" style={{margin: "30px 0"}} >
                        <Post user="costa_fah" icone="https://i.pinimg.com/564x/f0/d6/79/f0d67915f6f402465c0767b39c45f332.jpg" curtidas="835 Curtidas" time="Há 5 horas" legenda="<3" imagem="https://i.pinimg.com/564x/57/39/d0/5739d0f85f44d159e233f4c2e9ce1aaf.jpg"/>
                    </div>

                    <div className="box" style={{margin: "30px 0"}} >
                        <Post user="gusta.goulart" icone="https://i.pinimg.com/564x/9f/fc/2f/9ffc2fe68bdc0fd3942fba7a062406b4.jpg" curtidas="1.675 Curtidas" time="Há 5 horas" legenda="Pode se encontrar a felicidade mesmo nas horas mais sombrias, se a pessoa lembrar de acender a luz" imagem="https://i.pinimg.com/564x/91/c8/82/91c8824e600fb47dbe36b4f78292a72c.jpg"/>
                    </div>

                    <div className="box" style={{margin: "30px 0"}} >
                        <Post user="vitoria_snts77" icone="https://i.pinimg.com/564x/59/01/04/5901040f4dcbcd66cb9739dbb40a98b7.jpg" curtidas="1.835 Curtidas" time="Há 5 horas" legenda="xiiis" imagem="https://i.pinimg.com/564x/f1/10/95/f11095a63aa89ddd0fc988e90e54496f.jpg"/>
                    </div>
                </div>
               

                <div style={{ gridArea: "secondColumn" }} >
                    <div className="suggestionBox" >
                        <Suggestion />
                    </div>
                </div>

            </div>
            
        </>
    )

}