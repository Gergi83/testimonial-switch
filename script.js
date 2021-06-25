const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-img');
const userName = document.querySelector('.user-name');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Artist',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem sequi obcaecati commodi sit? Impedit, veritatis, dolor laboriosam maxime alias laborum illo veniam nemo autem eos inventore animi corrupti omnis consequuntur! Aliquid sapiente ea porro quos voluptatibus consequatur cumque odio quae?',
  },
  {
    name: 'June Cha',
    position: 'Actress',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quibusdam provident mollitia explicabo ducimus corrupti possimus consectetur error sint deleniti ipsum vero ad similique modi officiis doloribus magni sunt, doloremque officia perferendis. Atque, rem quas!',
  },
  {
    name: 'Iida Niskanen',
    position: 'Dancer',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur facere dolor cupiditate quod totam consectetur, nobis repellat quam sint nesciunt tempora hic neque accusantium. Mollitia itaque eius nesciunt hic, minima autem saepe. Vitae labore vero tempora reiciendis, maiores libero corrupti corporis possimus illo impedit accusantium!',
  },
  {
    name: 'Renee Sims',
    position: 'Singer',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta atque facilis nihil consequuntur aliquid debitis cumque corrupti sunt fugit quae aspernatur quidem illo cum odio porro, commodi totam voluptates.',
  },
];

let idx = 1;

function updateTestimonial() {
  const {name, position, photo, text} = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  userName.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
