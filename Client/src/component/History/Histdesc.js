
const HistDesc = (props) => {
    return(
        <>
            <p style={{ display: "inline-block", padding: "7px" }}>
            From Date: {props.fromDate}
          </p>
          <p style={{ display: "inline-block", padding: "7px" }}>
            To Date: {props.toDate}
          </p>
          <br />
          <p style={{ padding: "7px" }}>Description: {props.description}</p>
        </>
    );
}

export default HistDesc;