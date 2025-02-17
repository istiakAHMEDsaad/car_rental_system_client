import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DailyPriceChart = ({ allPrices, postDate }) => {
  // Prepare data for recharts
  const data = postDate.map((date, index) => ({
    date: new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    }),
    price: allPrices[index]
  }));

  return (
    <div className="w-full h-80"> {/* Responsive container */}
      <h2 className="text-xl font-semibold text-center mb-4">Daily Price Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} angle={-20} textAnchor="end" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

DailyPriceChart.propTypes = {
  allPrices: PropTypes.array.isRequired,
  postDate: PropTypes.array.isRequired,
};

export default DailyPriceChart;