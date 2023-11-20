import { useLanguage } from "../components/LanguageContext"

const Login = () => {
    const { language } = useLanguage();
    return(
        <> 
            <h2 style={{ fontWeight: "bold", fontSize: "3rem" }}>
                {language === "pt-BR" ? "Você está na página de login" : "You are on the login page"}
            </h2>
        </>
    )
}

export default Login