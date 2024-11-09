import Link from "next/link";
function Header(){
    return(
        <header className="flex justify-between bg-green-200">
            {/* LOGO */}
            <div>
                <h1 className="size-auto "><b>FLOWER WORLD
               </b></h1>
               
             <img src="https://i.pinimg.com/originals/35/93/37/35933714b1d5a7cc37e101d61c2c313f.jpg" height="75" width="75"></img>
            </div>


            {/* LINK */}
            <div>
                <nav><ul className="flex gap-x-11 text-blue-950">
                    <li><Link href= "/"> Home </Link></li>
                    <li><Link href= "/about" > About </Link></li>
                    <li><Link href= "/contact"> Contact </Link></li>
                </ul>

                </nav>
            </div>
        </header>
    );
}
export default Header;