import { useTranslation } from "react-i18next";

function Footer(){
    const { t, i18n } = useTranslation();

    return(
        <footer className="footer footer-center py-10 bg-ghost text-base text-white z-10 mt-5 mx-auto"> {/* fixed bottom-0 */}
            <div className="flex flex-col justify-center w-96 mx-auto ">
                <div>
                    <p>{t("Copyright")} © {t("2022")} - {t(String(new Date().getFullYear()))}, {t("All right reserved")}</p>
                </div>
                <div>
                    <p>{t("Made with ❤️ by")} <a href="https://github.com/ImJustNon" target="_blank" className="font-semibold">NO.eNd</a></p>
                </div>
            </div>
        </footer>
    );
}


export default Footer;