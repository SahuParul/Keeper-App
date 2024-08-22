
const time = new Date();
const year = time.getFullYear(); 

function Footer(){
    return(
       <footer><p>Copyright ©{year}</p></footer>
    );
}
export default Footer;