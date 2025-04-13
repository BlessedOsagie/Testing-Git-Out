import image from './assets/AnimeGIRL.jpg';

function Displayimage() {
  return (
    <div className="img">
      <img src={image} alt="display-photo" width="800px" />
      {/* <h3 className="display-image-header">Would you like to smash??🥵</h3> */}
      <hr className="line" />
    </div>
  );
}

export default Displayimage;
