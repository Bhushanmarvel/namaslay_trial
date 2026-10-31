
import {
  ClipboardList,
  Dumbbell,
  CalendarDays,
  MessageCircle,
  ChartNoAxesCombined,
  HeartPulse,
  CheckCircle2,
  Play,
} from "lucide-react";

const gold = "var(--gold)";

const programSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Enrollment & Onboarding",
    points: [
      "After enrollment, our team will email you the Kahunas app download link.",
      "Download Kahunas and complete the detailed Q&A form.",
      "Bhushan reviews your goals, lifestyle, experience and limitations to understand your requirements.",
    ],
  },
  {
    number: "02",
    icon: Dumbbell,
    title: "Personalised Workout & Nutrition Plan",
    points: [
      "Your workout and nutrition plans are designed around your goals, lifestyle and current fitness level.",
      "Your training can include Fat Loss Blocks and Muscle Building Blocks based on your goals and progress.",
      "Your workout and diet plans are uploaded to Kahunas for access anytime.",
      "A daily habit form helps us monitor steps, workouts, meal adherence and any hurdles you face.",
      "Your plan is reviewed and adjusted according to your progress and feedback.",
    ],
  },
  {
    number: "03",
    icon: CalendarDays,
    title: "One-on-One Session With Bhushan",
    points: [
      "The day after enrollment, Bhushan conducts a detailed personal session with you.",
      "He reviews your goals, limitations, lifestyle and previous training experience.",
      "Your workout and nutrition plans are explained in depth.",
      "Necessary adjustments are made to suit your individual requirements.",
    ],
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Daily WhatsApp Group Support",
    points: [
      "A private WhatsApp group is created with you, Bhushan and one team member.",
      "You can share workout logs, meal updates, questions and daily progress.",
      "Our team collects your daily habit updates after 8:00 PM.",
      "The group provides ongoing communication, guidance and accountability throughout your program.",
    ],
  },
  {
    number: "05",
    icon: ChartNoAxesCombined,
    title: "Weekly Check-In Analysis",
    points: [
      "Complete your weekly progress check-in through Kahunas.",
      "Bhushan personally reviews your check-in and assesses your progress.",
      "You receive detailed feedback in your private WhatsApp group.",
      "Your training, nutrition and next steps are adjusted when needed.",
    ],
  },
  {
    number: "06",
    icon: HeartPulse,
    title: "Blood Work Analysis",
    points: [
      "Share your available blood work reports for review.",
      "Relevant blood markers and nutritional indicators are reviewed in the context of your fitness goals.",
      "The findings help identify areas that may require attention or further medical evaluation.",
      "Where appropriate, the findings can inform your nutrition, recovery and training strategy.",
    ],
  },
];

const apps = [
  {
    name: "Kahunas",
    description: "Personalised plans, onboarding and weekly check-ins",
  },
  {
    name: "Hevy",
    description: "Workout logging and strength training records",
  },
  {
    name: "Strava",
    description: "Activity tracking and workout records",
  },
  {
    name: "WhatsApp",
    description: "Daily communication, accountability and feedback",
  },
];

export default function ProgramDetails() {
  return (
    <section
      id="program-details"
      className="scroll-mt-20 bg-black py-12 text-white md:py-20"
    >
      <div className="container-custom">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[5px]"
            style={{ color: gold }}
          >
            Our Program
          </p>

          <h2 className="mt-3 text-3xl font-bold uppercase leading-tight md:text-5xl">
            PROGRAM{" "}
            <span style={{ color: gold }}>
              DETAILS
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base">
            A structured and personalised fitness transformation
            program combining expert coaching, tailored nutrition,
            progress tracking and ongoing accountability.
          </p>
        </div>

        {/* Six program cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="h-full rounded-2xl border bg-zinc-950 p-5 md:p-6"
                style={{ borderColor: gold }}
              >
                <div className="mb-5 flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border"
                    style={{ borderColor: gold, color: gold }}
                  >
                    <Icon size={24} />
                  </div>

                  <div>
                    <p
                      className="text-xs font-bold tracking-widest"
                      style={{ color: gold }}
                    >
                      {step.number}
                    </p>
                    <h3 className="mt-1 text-lg font-bold uppercase leading-snug md:text-xl">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-4">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0"
                        style={{ color: gold }}
                      />
                      <span className="text-sm leading-6 text-zinc-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Video and apps */}
        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Weekly check-in sample */}
          <div
            className="rounded-2xl border bg-zinc-950 p-5 md:p-7 lg:col-span-2"
            style={{ borderColor: gold }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[4px]"
              style={{ color: gold }}
            >
              Sample Video
            </p>

            <h3 className="mt-3 text-2xl font-bold uppercase md:text-3xl">
              HOW WEEKLY CHECK-IN WORKS
            </h3>

            <p className="mt-3 mb-6 max-w-xl text-sm leading-6 text-zinc-400">
              Watch a sample of how Bhushan analyses client
              progress, reviews check-in information and
              provides personalised feedback.
            </p>

            <div className="aspect-video overflow-hidden rounded-xl bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/l35N4b0P0yM"
                title="Sample Weekly Check-In"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <a
              href="https://youtu.be/l35N4b0P0yM"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-black transition hover:opacity-90"
              style={{ backgroundColor: gold }}
            >
              <Play size={16} />
              WATCH ON YOUTUBE
            </a>
          </div>

          {/* Apps we use */}
          <div
            className="rounded-2xl border bg-zinc-950 p-5 md:p-7"
            style={{ borderColor: gold }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[4px]"
              style={{ color: gold }}
            >
              Our Tracking System
            </p>

            <h3 className="mt-3 text-2xl font-bold uppercase md:text-3xl">
              APPS WE USE
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Your plans, training records and progress
              communication, organised across our coaching tools.
            </p>

            <div className="mt-6 space-y-5">
              {apps.map((app) => (
                <div
                  key={app.name}
                  className="border-b border-zinc-800 pb-4 last:border-0"
                >
                  <h4
                    className="text-lg font-bold"
                    style={{ color: gold }}
                  >
                    {app.name}
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
