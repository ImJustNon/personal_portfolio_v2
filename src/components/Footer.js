
function Footer(){
    return(
        <footer className="footer footer-center p-4 bg-ghost text-base text-black z-10 mt-5 mx-auto"> {/* fixed bottom-0 */}
            <div className="flex flex-col justify-center w-96 mx-auto ">
                <div>
                    <p>Copyright © {/* new Date().getFullYear()*/} 2022, All right reserved</p>
                </div>
                <div>
                    <p>Made with ❤️ by <a href="https://github.com/ImJustNon" target="_blank" className="font-semibold">NOrNor.KnK</a></p>
                </div>
            </div>
        </footer>
    );
}


export default Footer;