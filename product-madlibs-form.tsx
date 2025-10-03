import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ProductMadLibs() {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const sections = [
    {
      title: "🌟 The Crown Jewel",
      fields: [
        { id: 's1_feature', placeholder: 'feature name' },
        { id: 's1_action', placeholder: 'what it does' },
        { id: 's1_comparison', placeholder: 'comparison' },
        { id: 's1_decision', placeholder: 'what you decided to do' },
        { id: 's1_instead', placeholder: 'instead of what' },
        { id: 's1_moment', placeholder: 'type of moment' },
        { id: 's1_enabled', placeholder: 'what it enabled' }
      ],
      template: (d) => `I'm ridiculously proud of our ${d.s1_feature || '___'} feature because it ${d.s1_action || '___'} better than ${d.s1_comparison || '___'}. The crazy judgment call that made this happen? We decided to ${d.s1_decision || '___'} instead of ${d.s1_instead || '___'}. And it was a ${d.s1_moment || '___'} moment/decision/move that in retrospect enabled ${d.s1_enabled || '___'}.`
    },
    {
      title: "🚫 The Thing We Didn't Build",
      fields: [
        { id: 's2_thing', placeholder: 'what you said no to' },
        { id: 's2_everyone', placeholder: 'what everyone did' },
        { id: 's2_why', placeholder: 'the reason' },
        { id: 's2_trying', placeholder: 'impossible task 1' },
        { id: 's2_while', placeholder: 'impossible task 2' },
        { id: 's2_instead', placeholder: 'what you did instead' },
        { id: 's2_result1', placeholder: 'result part 1' },
        { id: 's2_result2', placeholder: 'result part 2' }
      ],
      template: (d) => `We deliberately said 'NOPE' to ${d.s2_thing || '___'} even though everyone ${d.s2_everyone || '___'} it. Why? Because ${d.s2_why || '___'} would have been like trying to ${d.s2_trying || '___'} while ${d.s2_while || '___'}. And instead we were able to ${d.s2_instead || '___'}, which ${d.s2_result1 || '___'} and/that ${d.s2_result2 || '___'}.`
    },
    {
      title: "🎨 Our Design DNA",
      fields: [
        { id: 's3_style1', placeholder: 'style/aesthetic 1' },
        { id: 's3_style2', placeholder: 'style/aesthetic 2' },
        { id: 's3_decision', placeholder: 'recent decision' },
        { id: 's3_instead', placeholder: 'alternative approach' }
      ],
      template: (d) => `Our team's taste is basically '${d.s3_style1 || '___'} meets ${d.s3_style2 || '___'}.' You can see this in how we recently decided to ${d.s3_decision || '___'} instead of ${d.s3_instead || '___'}.`
    },
    {
      title: "⚖️ The Impossible Choice",
      fields: [
        { id: 's4_option1', placeholder: 'option 1' },
        { id: 's4_option2', placeholder: 'option 2' },
        { id: 's4_comparison1', placeholder: 'comparison 1' },
        { id: 's4_comparison2', placeholder: 'comparison 2' },
        { id: 's4_chose', placeholder: 'what you chose' },
        { id: 's4_reason', placeholder: 'why you chose it' }
      ],
      template: (d) => `The hardest trade-off? We had to choose between ${d.s4_option1 || '___'} and ${d.s4_option2 || '___'}, which felt like choosing between ${d.s4_comparison1 || '___'} and ${d.s4_comparison2 || '___'}. We went with ${d.s4_chose || '___'} because we believed that ${d.s4_reason || '___'}.`
    },
    {
      title: "🤯 The Plot Twist",
      fields: [
        { id: 's5_using', placeholder: 'how users used it' },
        { id: 's5_quote', placeholder: 'user quote' },
        { id: 's5_realized', placeholder: 'what you realized' }
      ],
      template: (d) => `Holy [expletive]! We discovered that our users were ${d.s5_using || '___'} with our product in ways we never imagined. One user literally said '${d.s5_quote || '___'},' and it made us realize that ${d.s5_realized || '___'}.`
    },
    {
      title: "🤔 Going Against the Grain",
      fields: [
        { id: 's6_data', placeholder: 'what data said' },
        { id: 's6_gut', placeholder: 'what gut said' },
        { id: 's6_ignored', placeholder: 'what you ignored' },
        { id: 's6_went', placeholder: 'what you went with' },
        { id: 's6_sometimes', placeholder: 'what you have to do' },
        { id: 's6_to', placeholder: 'to achieve what' },
        { id: 's6_result', placeholder: 'the result' }
      ],
      template: (d) => `Data said '${d.s6_data || '___'}', but our gut said '${d.s6_gut || '___'}'. We ignored the ${d.s6_ignored || '___'} and went with ${d.s6_went || '___'} because sometimes you have to ${d.s6_sometimes || '___'} to ${d.s6_to || '___'}. Result? It was ${d.s6_result || '___'} than we expected.`
    },
    {
      title: "💥 The Beautiful Disaster",
      fields: [
        { id: 's7_thought', placeholder: 'what you thought' },
        { id: 's7_next', placeholder: 'what it would be' },
        { id: 's7_flopped', placeholder: 'comparison for flop' },
        { id: 's7_users', placeholder: 'user reaction' },
        { id: 's7_assume', placeholder: 'what not to assume' },
        { id: 's7_because', placeholder: 'flawed reasoning' }
      ],
      template: (d) => `We thought ${d.s7_thought || '___'} would be the next ${d.s7_next || '___'}. Instead, it flopped harder than ${d.s7_flopped || '___'}. Users were like '${d.s7_users || '___'}?' The lesson? Never assume people want ${d.s7_assume || '___'} just because ${d.s7_because || '___'}.`
    },
    {
      title: "🦄 What Makes Us Special",
      fields: [
        { id: 's8_competitors', placeholder: 'what competitors do' },
        { id: 's8_we', placeholder: 'what you do' },
        { id: 's8_difference1', placeholder: 'your approach' },
        { id: 's8_difference2', placeholder: 'their approach' },
        { id: 's8_comparison1', placeholder: 'comparison 1' },
        { id: 's8_comparison2', placeholder: 'comparison 2' },
        { id: 's8_nogoing', placeholder: 'result of difference' }
      ],
      template: (d) => `While competitors are busy ${d.s8_competitors || '___'}, we're over here ${d.s8_we || '___'}. Users feel the difference because we ${d.s8_difference1 || '___'} instead of ${d.s8_difference2 || '___'}. It's like the difference between ${d.s8_comparison1 || '___'} and ${d.s8_comparison2 || '___'} - once you experience it, there's ${d.s8_nogoing || '___'}.`
    },
    {
      title: "🔮 The Next Big Bet",
      fields: [
        { id: 's9_option1', placeholder: 'option 1' },
        { id: 's9_option2', placeholder: 'option 2' },
        { id: 's9_result1', placeholder: 'potential result 1' },
        { id: 's9_result2', placeholder: 'potential result 2' },
        { id: 's9_camp1', placeholder: 'camp 1 name' },
        { id: 's9_camp2', placeholder: 'camp 2 name' }
      ],
      template: (d) => `Right now we're debating whether to ${d.s9_option1 || '___'} or ${d.s9_option2 || '___'}. It's keeping me up at night because this decision could either ${d.s9_result1 || '___'} or ${d.s9_result2 || '___'}. The team is split between the '${d.s9_camp1 || '___'}' camp and the '${d.s9_camp2 || '___'}' camp.`
    },
    {
      title: "🧠 Wisdom Bombs",
      fields: [
        { id: 's11_important', placeholder: 'what is important' },
        { id: 's11_than', placeholder: 'what it is more important than' },
        { id: 's11_always', placeholder: 'what to always do' },
        { id: 's11_before', placeholder: 'before doing what' },
        { id: 's11_love', placeholder: 'for the love of...' },
        { id: 's11_stop', placeholder: 'what to stop doing' },
        { id: 's11_just', placeholder: 'bad reason for doing it' },
        { id: 's11_way', placeholder: 'how you learned it' }
      ],
      template: (d) => `Dear future product visionaries: Remember that ${d.s11_important || '___'} is more important than ${d.s11_than || '___'}. Always ${d.s11_always || '___'} before you ${d.s11_before || '___'}. And for the love of ${d.s11_love || '___'}, please stop ${d.s11_stop || '___'} just because ${d.s11_just || '___'}. Trust me, I learned this the ${d.s11_way || '___'} way.`
    }
  ];

  const handleChange = (fieldId, value) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
  };

  const handleSubmit = async () => {
    try {
      // Submit to your API endpoint
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          responses: formData,
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Also download as backup
      const dataStr = JSON.stringify(formData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'product-madlibs-responses.json';
      link.click();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Your responses have been downloaded as a backup.');
      
      // Download as fallback
      const dataStr = JSON.stringify(formData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'product-madlibs-responses.json';
      link.click();
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Thanks for sharing your story!</h2>
          <p className="text-gray-600 mb-6">Your responses have been downloaded as a JSON file.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Submit Another Response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Product Mad-Libs 🚀</h1>
          <p className="text-gray-600">The fun way to share your product story! Fill in the blanks below.</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4 text-gray-700 leading-relaxed">
                {section.template(formData)}
              </div>

              <div className="grid gap-4">
                {section.fields.map((field) => (
                  <input
                    key={field.id}
                    type="text"
                    placeholder={field.placeholder}
                    value={formData[field.id] || ''}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                ))}
                <textarea
                  placeholder="Want to share more details? Add them here... (optional)"
                  value={formData[`${section.fields[0].id}_notes`] || ''}
                  onChange={(e) => handleChange(`${section.fields[0].id}_notes`, e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-24 resize-y"
                />
              </div>
            </div>
          ))}

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🎬 Show and Tell</h2>
            <p className="text-gray-600 mb-4">Record a 30-40 second demo showing off your favorite feature!</p>
            <input
              type="text"
              placeholder="Link to your demo video (optional)"
              value={formData.demoLink || ''}
              onChange={(e) => handleChange('demoLink', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition flex items-center justify-center gap-2 shadow-lg"
          >
            <Send size={24} />
            Submit Your Story
          </button>
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Pro tip: The more specific your answers, the more memorable your story will be! 🎭
        </p>
      </div>
    </div>
  );
}