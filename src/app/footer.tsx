import Link from "next/link";
function Footer(){
    return(
        <footer className="flex justify-between bg-amber-100" >
            {/* LOGO */}
            <div>
                <h1><b>COPYRIGHT INFORMATION
               </b></h1>
               <img src="https://png.pngtree.com/element_pic/00/16/10/165803698f7f1f4.png" height="40" width="40"></img>
            </div>


            {/* LINK */}
            <div>
                <nav><ul className="flex-gap-x-2 text-blue ">
                    <li><Link href= "/twitter"> Twitter</Link></li>
                    <li><Link href= "/facebook" > Facebook </Link></li>
                    <li><Link href= "/linkedIn"> Linkedin </Link></li>
                </ul>

                </nav>
            </div>
        </footer>
    );
}
export default Footer;
