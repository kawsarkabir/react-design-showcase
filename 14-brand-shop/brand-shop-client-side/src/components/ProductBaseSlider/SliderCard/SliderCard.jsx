const SliderCard = ({ slider }) => {
    const {sliderTitle, sliderURL, sliderDecs, brandName} = slider || {}
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr className="flex justify-around items-center">
              <td>
                <div>
                  <div>
                    <div className="w-40 h-40">
                      <img src={sliderURL} alt=" product-img" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{brandName}</td>
              <td>{sliderTitle}</td>
               
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SliderCard;
