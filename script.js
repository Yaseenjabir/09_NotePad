const div = document.querySelector('.clickDiv');

let click = false;

div.addEventListener('click',()=>{
  if(click === false){

    const note = document.createElement('div');
    note.classList.add('note');
    document.querySelector('body').append(note)
  
    const title = document.createElement('h3');
    title.textContent = 'Add a note';
    title.classList.add('title');
    note.append(title)
  
    const label1 = document.createElement('label');
    label1.textContent = 'Set Title'
    label1.classList.add('label1');
    note.append(label1)
  
    const input1 = document.createElement('input');
    input1.classList.add('input1');
    input1.placeholder = 'Enter Title'
    note.append(input1);
  
    const label2 = document.createElement('label');
    label2.textContent = 'Add Description'
    label2.classList.add('label2');
    note.append(label2)
  
    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    textarea.placeholder = 'Enter Description Here'
    note.append(textarea);
  
    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add'
    addBtn.classList.add('addBtn');
    note.append(addBtn);
    click = true;
  
    addBtn.addEventListener('click',()=>{
      const savedDiv = document.createElement('div');
      savedDiv.classList.add('test')
      document.querySelector('.all').append(savedDiv)
  
      if(input1.value === "" || textarea.value === ""){
        alert("Something is missing")
        savedDiv.remove()
      }
      else{
        
        const para = document.createElement("p");
        para.textContent = textarea.value;
        if(para.textContent.length > 170){
          alert("Please reduces your text")
          savedDiv.remove();
        }
        else{
          const h3 = document.createElement('h3');
          h3.textContent = input1.value;
          h3.classList.add('testH3')
          savedDiv.append(h3)
          
          para.classList.add('testPara')
          savedDiv.append(para);


          const btn = document.createElement('button');
          btn.innerText = 'Delete';
          btn.classList.add('testBtn')
          savedDiv.append(btn)
          
          btn.addEventListener('click',()=>{
            savedDiv.remove()
          })
        }
    
      }
      click = false;
      note.remove()

    })

  }

})