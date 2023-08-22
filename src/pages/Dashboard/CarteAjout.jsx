import React from 'react';

const CarteAjout = (props) => {
    return (
        <div>
     <div class="dropdown">
  <button class="btn boutonIns w-100 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    AJOUTER
  </button>
  <ul class="dropdown-menu w-50" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Admin</a></li>
    <li><a class="dropdown-item" href="#">Coach</a></li>
    <li><a class="dropdown-item" href="#">Eléve</a></li>
  </ul>
</div>
    </div>
    );
};

export default CarteAjout;