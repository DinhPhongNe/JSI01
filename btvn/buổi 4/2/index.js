class Component {
    constructor(parentElement, className, htmlTag) {
      this.parentElement = parentElement;
      this.className = className;
      this.htmlTag = htmlTag;
    }
  
    render() {
      const element = document.createElement(this.htmlTag);
      element.classList.add(this.className);
      this.parentElement.appendChild(element);
    }
  }
  
  class Header extends Component {
    constructor(parentElement, className, htmlTag) {
      super(parentElement, className, htmlTag);
      this.logo = 'Logo';
      this.menuItems = ['Home', 'About', 'Main', 'Contact'];
    }
  
    render() {
      super.render();
      const logoElement = document.createElement('h1');
      logoElement.textContent = this.logo;
      document.querySelector(`.${this.className}`).appendChild(logoElement);
  
      const menuElement = document.createElement('ul');
      this.menuItems.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.textContent = item;
        menuElement.appendChild(menuItem);
      });
      document.querySelector(`.${this.className}`).appendChild(menuElement);
  
      // Thêm class "header" vào phần tử HTML của Header
      document.querySelector(`.${this.className}`).classList.add('header');
    }
  }
  
  class Footer extends Component {
    constructor(parentElement, className, htmlTag) {
      super(parentElement, className, htmlTag);
      this.address = '123 Main St, Anytown USA';
      this.phone = '555-555-1212';
    }
  
    render() {
      super.render();
      const addressElement = document.createElement('p');
      addressElement.textContent = `Address: ${this.address}`;
      document.querySelector(`.${this.className}`).appendChild(addressElement);
  
      const phoneElement = document.createElement('p');
      phoneElement.textContent = `Phone: ${this.phone}`;
      document.querySelector(`.${this.className}`).appendChild(phoneElement);
  
      // Thêm class "footer" vào phần tử HTML của Footer
      document.querySelector(`.${this.className}`).classList.add('footer');
    }
  }
  
  // Sử dụng các lớp Header và Footer để tạo các thành phần trên trang web
  const header = new Header(document.body, 'header', 'header');
  header.render();
  
  const footer = new Footer(document.body, 'footer', 'footer');
  footer.render();