(() => {
  interface Product {
    id: number;
    name: string;
  }

  // * El objetivo es que el llamado de Apis o Conexiones a base de datos no estén dentro de una misma clase
  // * que la logica de negocio
  class ProductService {
    getProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }
    saveProduct(product: Product) {
      console.log("Guardando en base de datos", product);
    }
  }

  class MailerService {
    private masterEmail: string = "fernando@google.com";
    sendEmail(emailList: string[], template: "to-admins" | "to-clients") {
      console.log("Enviando correo a los clientes");
    }
  }
  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }

    notifyClients() {
      console.log("Enviando correo a los clientes");
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];
    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }
  const productBloc = new ProductBloc();
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
