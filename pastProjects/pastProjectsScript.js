// When click it will bring them to the page later on.

const flexItems = document.querySelectorAll('.flex-item');
    flexItems.forEach(item => {
      item.addEventListener('click', event => {
        console.log(`Flex item with id ${event.target.id} was clicked!`);
      });
    });