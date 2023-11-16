import PropTypes from "prop-types"; // ES6

const SectionHeader = ({ subHeading, mainHeading }) => {
  return (
    <div>
      <div className="text-center">
        <p className="text-[#D99904] mt-4">{subHeading} </p>
        <h1 className="border-t border-b text-4xl mb-5 py-3 mt-2">
          {mainHeading}
        </h1>
      </div>
    </div>
  );
};
SectionHeader.propTypes = {
  subHeading: PropTypes.string.isRequired,
  mainHeading: PropTypes.string.isRequired,
};
export default SectionHeader;
