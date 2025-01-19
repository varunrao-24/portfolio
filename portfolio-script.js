
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal functionality for profile photo
    var modal = document.getElementById('myModal');
    var img = document.getElementById('profileImg');
    var modalImg = document.getElementById('imgModal');
    var span = document.getElementsByClassName('close')[0];

    // When the user clicks on the image, open the modal
    img.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }


