export default function handler(req, res) {
  res.status(200).json({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [12000, 15000, 13000, 17000, 16000, 18000],
  });
}