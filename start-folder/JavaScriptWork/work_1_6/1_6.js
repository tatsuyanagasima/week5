function makeCoffee() {

    console.log("");

    return new Promise((resolve) => {

      setTimeout(() => {

        console.log("");

        resolve();

      }, 2000); // 2秒

    });

  }

  

  function makeSandwich() {

    console.log("");

    return new Promise((resolve) => {

      setTimeout(() => {

        console.log("");

        resolve();

      }, 3000); // 3秒

    });

  }

  

  async function serveCustomer() {

    await Promise.all([makeCoffee(),makeSandwich()]);

    console.log("");

  }

  

  console.log("");

  serveCustomer();