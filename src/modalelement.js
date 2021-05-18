// modal script goes here
console.log("modal scripte running here !");

export default () => {
    let modalInfo = `
    <div class="modal-dialog">
      <header class="modal-header">
        Member Login
        <button class="close-modal" aria-label="close modal" data-close>
          ✕  
        </button>
      </header>
      <section class="modal-content">
      <form>
          <input type="text" name="email" placeholder="email">
          <input type="text" name="password" placeholder="password" >
      </form>

      <p><a href="">FORGOT YOUR PASSWORD?</a>
      </p>
      </section>

      <footer class="modal-footer">
      <button class="close-modal"  data-signin >
          REGISTER 
      </button>
      <button class="close-modal"  data-signin >
          SIGN IN  
      </button>
      </footer>
    </div>`;

  const isVisible = "is-visible";
    const element = document.createElement("div");
    element.id = "modal-login";
    element.classList.add("modal");
    // element.classList.add("is-hidden");
    element.setAttribute("data-animation", "slideDownBottom");
    element.innerHTML = modalInfo;
    const closeEls = element.querySelectorAll("[data-close]");
    for (const el of closeEls) {
      el.addEventListener("click", function() {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
      });
    }
    return element;
  };
  