
document.addEventListener('click', (event) => {
    if (event.target.matches('#btn-delete')) {
        //busca en el body la clase .MarcaParaEliminar del primer ancestro que encuentre (la clase esta definida en estilos.css)
        const article = event.target.closest('.MarcaParaEliminar'); 
        const idArticle = article.dataset.id;//recupero la id que se guardo en el dataset del ancestro
        fetch(`http://localhost:3000/api/tareas/${idArticle}`, {
            method: 'DELETE'
        }).then(respuesta => {
            if (respuesta.ok) {
                article.remove();// eliminamos del body todo el elemento con sus hijos (osea el Posteo con la id recuperada)
            }
        }).catch(err => {
            console.error(err);
        });
    }
});
