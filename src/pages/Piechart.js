import React from "react";
import { MDBContainer } from "mdbreact";
import { Pie } from "react-chartjs-2";
import Navba from "../components/NavBar";
const PieChart = () => {
	
// Sample data
const data = {
	labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
	datasets: [
		{
		label: "Hours Studied in Geeksforgeeks",
		data: [2, 5, 6, 7, 3],
		backgroundColor: ["blue", "green", "yellow", "pink", "orange"],
		}
	]
}
return (
	<div>	
	<MDBContainer>
	<Pie data={data} />
	</MDBContainer>
	</div>
);
}
	
export default PieChart;
