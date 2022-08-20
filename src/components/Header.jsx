function Header () {
    return (
        /* className para el CSS ya que class es palabra reservada de JS */
        
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
            Seguimiento Pacientes {''}
            <span className="text-indigo-600">Veterinaria</span>
        </h1>
        

    )
}

export default Header;