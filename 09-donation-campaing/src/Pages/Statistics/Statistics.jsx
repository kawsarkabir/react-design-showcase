import { useLoaderData } from "react-router-dom";
import { PieChart, Legend, Pie, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const data = [];
  const catagoriesData = useLoaderData();
  const donationItems = JSON.parse(localStorage.getItem("donation")) || [];

  const yourDonation = { name: "Your Donation" };
  const totalDonation = { name: "Total Donation" };
  const remainDonation = catagoriesData.length - donationItems.length;

  yourDonation.value = donationItems.length;
  totalDonation.value = remainDonation;

  data.push(totalDonation);
  data.push(yourDonation);

  const COLORS = ["#FF444A", "#00C49F"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
