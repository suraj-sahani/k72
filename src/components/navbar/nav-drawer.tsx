const NavDrawer = () => {
  return (
    <div>
      <ul>
        <li>
          <button>
            <span>Projects</span>
            <div>Pour tout voir</div>
          </button>
        </li>

        <li>
          <button>
            <span>Agence</span>
            <div>Pour tout savoir</div>
          </button>
        </li>

        <li>
          <button>
            <span>Contact</span>
            <div>Pour envoyer un fax</div>
          </button>
        </li>

        <li>
          <button>
            <span>Blogue</span>
            <div>Lire les articles</div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavDrawer;
