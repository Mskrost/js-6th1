let namesArray = ['Janci', 'Alexandra'];

namesArray.forEach((name) => {
    $('ul').append(`<li class="janci">${name}</li>`);
    if (name === 'Janci') {
        $('.janci').html(`<strong>${name}</strong`);
    };
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$('body').append(`<h1>${additionalBlock.title}</h1>`);
$('body').append(`<p>${additionalBlock.text}</p>`);