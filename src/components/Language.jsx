import React from "react";

const languages = [
  { name: "Arabic", level: "Native", proficiency: 100 },
  { name: "English", level: "Fluent", proficiency: 90 },
  { name: "Spanish", level: "Intermediate", proficiency: 60 },
  { name: "French", level: "Basic", proficiency: 30 }
];

const Language = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="250" id="languages" className="w-full py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto relative">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Language <span className="text-red-600">Proficiency</span>
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            The languages I speak and my proficiency level in each
          </p>
        </div>

        {/* Language Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languages.map((language, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{language.name}</h3>
                <span className="text-sm font-medium text-blue-600">{language.level}</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-red-400 h-2.5 rounded-full" 
                  style={{ width: `${language.proficiency}%` }}
                ></div>
              </div>
              
              <div className="flex justify-end mt-1">
                <span className="text-xs text-gray-500">{language.proficiency}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Language;