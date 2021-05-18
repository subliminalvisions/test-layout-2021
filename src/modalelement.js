// modal script goes here
// console.log("modal script running here !");
export default () => {
      let testInfo = `
      <div class="modal-dialog">
      <header class="modal-header">
      <h3 class="modal-title">Member Login</h3>
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
      <button class="close-modal btn"  data-signin >
          REGISTER 
      </button>
      <button class="close-modal btn primary " data-signin >
          SIGN IN  
      </button>
      </footer>
      </div>
    `;

    const isVisible = "is-visible";
      const element = document.createElement("div");
      element.id = "modal1";
      element.classList.add("modal");
    //   element.classList.add("is-visible");
      element.setAttribute("data-animation", "slideInOutDown");
  
      element.innerHTML = testInfo;
      const closeEls = element.querySelectorAll("[data-close]");
      for (const el of closeEls) {
        el.addEventListener("click", function() {
          this.parentElement.parentElement.parentElement.classList.remove(isVisible);
        });
      }
      return element;
    };
    
  