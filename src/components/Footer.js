
function Footer(){
    return(
        <footer className="footer footer-center p-4 bg-ghost text-base text-black z-10 mt-5 mx-auto"> {/* fixed bottom-0 */}
            <aside>
                <p>Copyright © {new Date().getFullYear()} - <a href="https://github.com/ImJustNon" target="_blank" className="font-semibold">NOrNor.KnK</a></p>
            </aside>
        </footer>
    );
}


export default Footer;