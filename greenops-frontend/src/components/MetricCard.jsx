
export default function MetricCard({
  title,
  value,
  unit,
  description,
  icon: Icon,
  color = "green",
}) {
  const colors = {
    green: "bg-green-50 text-green-700",
    blue: "bg-blue-50 text-blue-700",
    orange: "bg-orange-50 text-orange-700",
    red: "bg-red-50 text-red-700",
    purple: "bg-purple-50 text-purple-700",
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">

      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">
          {title}
        </p>

        <div className={`p-3 rounded-xl ${colors[color]}`}>
          {Icon && <Icon size={21} />}
        </div>
      </div>

      <div className="flex items-baseline gap-1 mt-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {value}
        </h2>

        {unit && (
          <span className="text-sm text-gray-500">
            {unit}
          </span>
        )}
      </div>

      <p className="text-xs text-gray-500 mt-2">
        {description}
      </p>

    </div>
  );
}
