document.addEventListener('DOMContentLoaded', function(){
  const list = [];

  const form = document.querySelector('.form_flex');
  const Image = document.querySelector('.imagem-file');
  const Title = document.querySelector('.titulo');
  const Desc = document.querySelector('.descricao');
  const items = document.querySelector('form-items');

  
  
  const buttonSubmit = document.querySelector('button');



 // funcao pre visualização imagem
  function previewFile() {
    const preview = document.querySelector('img');
    const input = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      preview.src = reader.result;
    }, false);
  
    if (input) {
      reader.readAsDataURL(input);
    }
  }



 function addItemToList (event) {
       event.preventDefault();

       const Valueimg = event.target["imagem-file"].value;
       const Valuetitulo = event.target["titulo"].value;
        const Valuedescricao = event.target["descricao"].value;

        if(Valueimg, Valuetitulo, Valuedescricao != "") {

            
            const item = {
                nameimg: Valueimg,
                nametitulo: Valuetitulo,
                namedescricao: Valuedescricao,
                
            };
            
            
            list.push(item);
          renderListItems();

        }

      }


      function renderListItems() {

      }

    });
