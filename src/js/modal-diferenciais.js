const modal = document.getElementById("modal-diferenciais");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.getElementById("close-modal");

modalContent.addEventListener("click", (e) => {
  if (e.target && e.target.id === "close-modal") {
    modal.classList.remove("fixed");
    modal.classList.add("hidden");
    modalContent.innerHTML = "";
  }
});

const modalData = {
  "open-modal-1": {
    img: "./images/svg/porjetoBilingue1.f009eb999bc5748e067d21b63711929d.svg",
    title: "Projeto Bilíngue",
    content:"Quando o Ensino Bilíngue começa cedo, seus benefícios duram toda a vida. Hoje, aprender inglês vai além da fluência: envolve adquirir competências interculturais que ampliam a visão de mundo e a percepção por meio do contato com diferentes pessoas, culturas e ambientes. </br> </br> No aspecto cognitivo, o aprendizado de um segundo idioma fortalece a capacidade intelectual, além de aprimorar habilidades de escuta e atenção essenciais para o desenvolvimento do aluno."
  },
  "open-modal-2": {
    img: "./images/svg/meditcao1.8bd5f67a9433d5c1269e8ef7c3c5410e.svg",
    title: "Meditação e Brinca Yoga",
    content:"O termo Yoga, do sânscrito “yuj”, significa “unir” e “integrar” e surgiu na Índia há mais de 5 mil anos. A prática promove a conexão entre corpo e mente por meio de movimentos inspirados na natureza e do controle da respiração. A meditação aumenta a atenção e a percepção das crianças sobre si mesmas. Com mais consciência emocional, elas identificam melhor suas necessidades e limites. Aprender a relaxar equilibra o sistema nervoso, reduz batimentos e respiração, e melhora o foco. Assim, Yoga e meditação favorecem o aprendizado ao longo da vida."
  },
  "open-modal-3": {
    img: "./images/svg/musicalizacao1.ea0b9ddde835e5880df74ec7552744d0.svg",
    title: "Musicalização Infantil",
    content:"O trabalho com a musicalização infantil na escola é indispensável, pois, além do desenvolvimento da sensibilidade à música contribui para a concentração, memória, coordenação motora, socialização, acuidade auditiva e disciplina. </br></br>A iniciação musical deve ter como objetivo durante a idade Pré-escolar, estimular na criança a capacidade de percepção, sensibilidade, imaginação, criação bem como age como uma recreação educativa, socializando, disciplinando e desenvolvendo a sua atenção."
  },
  "open-modal-4": {
    img: "./images/svg/judo.e538fdcb65eef565b4dbf727264e4fb0.svg",
    title: "Judô",
    content:"Criado em 1882 no Japão, o judô — que significa “caminho suave” — é uma arte marcial que utiliza o corpo como alavanca para imobilizar o adversário, aproveitando sua força em benefício próprio. Além de ser uma luta, é um esporte com inúmeros benefícios para quem o pratica. </br></br> Nesse texto, listamos alguns deles: </br></br> - Ajuda a emagrecer e melhora o condicionamento físico </br> - Desenvolve paciência e autocontrole </br> - Estimula o respeito a mestres e adversários </br> - Aumenta a capacidade de análise da realidade."
  },
  "open-modal-5": {
    img: "./images/svg/ballett1.aa88746f43e1e0cb2be28949c50a4808.svg",
    title: "Ballet e Jazz",
    content:"O ballet é uma das atividades mais indicadas para crianças e pode ser praticado por meninos e meninas. Ele combina movimento, musicalidade, coordenação motora, lateralidade e expressão corporal, tornando-se uma atividade completa para o desenvolvimento infantil. </br> </br> Além disso, o ballet contribui para a concentração, postura e senso de ritmo, habilidades essenciais que também auxiliam em diversas outras atividades do dia a dia."
  }
};

Object.keys(modalData).forEach(id => {
  const btn = document.getElementById(id);
  if (!btn) return;

  btn.addEventListener("click", () => {
    const { img, title, content } = modalData[id];

    modalContent.innerHTML = `
      <div class="relative flex w-[1100px] bg-white modal-border-radius-top-left box-shadow modal-border-radius">
        <button class="cursor-pointer absolute z-50 top-0 right-0 text-black px-4 py-2 rounded text-2xl" ><i id="close-modal" class="bi bi-x-lg"></i></button>
        
        <div class="w-full hidden md:w-4/10 items-center justify-center relative lg:flex">
          <div id="img-loader" class="flex justify-center items-center w-full h-60">
            <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
          </div>
          <img id="modal-img" class="w-full object-contain hidden" 
              src="${img}" 
              alt="">
        </div>
        
        <div class="w-full p-8 flex text-black flex-col justify-center lg:w-6/10">
          <h3 class="text-4xl text-center text-color-background-white-base font-extrabold lg:text-start">${title}</h3> <br>
          <span class="text-xl text-color-background-white-base font-medium">
            ${content}
          </span>
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
    modal.classList.add("fixed");

    const modalImg = document.getElementById("modal-img");
    const loader = document.getElementById("img-loader");
    
    modalImg.onload = () => {
      loader.remove();
      modalImg.classList.remove("hidden");
    };
  });
});


