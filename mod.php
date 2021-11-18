<?php
  include 'ComH.html';
  ?>
  <div class="container">
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col" class="mod"></th>
          <th scope="col">Komenda</th>
          <th scope="col">Opis</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" class="mod"></th>
          <td>!ban <span>nick</span> <span>czas bana *</span></td>
          <td>zbanuj użytkownika</td>
        </tr>
        <tr>
          <th scope="row" class="mod"></th>
          <td>!unban <span>nick</span></td>
          <td>odbanuj użytkownika</td>
        </tr>
        <tr>
          <th scope="row" class="mod"></th>
          <td>!play <span>link</span></td>
          <td>bot doda piosenkę do playlisty</td>
        </tr>
        <tr>
          <th scope="row" class="mod"></th>
          <td>!skip</td>
          <td>bot puści kolejną piosenkę z playlisty</td>
        </tr>
        <tr>
          <td>+ komendy użytkownika</td>
        </tr>
        <thead class="thead-light">
        <tr>
          <th colspan="3" class="fs-5">* czas bana nie jest wymagany, nie wpisanie go banuje na czas nieokreślony, tak zwany PERM.</th>
        </tr>
      </thead>
      </tbody>
    </table>
  </div>
<?php
  include 'ComF.html';
  ?>