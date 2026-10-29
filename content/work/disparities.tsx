export default function DisparitiesEssay() {
  return (
    <>
      <p>
        This study came out of a data science course at the University at Buffalo. It asks a narrow, uncomfortable
        question: in records of fatal encounters with law enforcement in the United States, where do racial
        disparities show up, and can the data predict them?
      </p>

      <h2>Approach</h2>
      <p>
        The work is in R. I cleaned and explored a national dataset of fatal encounters from 2000 to 2020, looked at
        how victims are distributed by race, age, and circumstance, and then built predictive models on top of it. An
        interactive Shiny app lets you explore the same data yourself.
      </p>

      <h2>What it showed</h2>
      <p>
        Most of the people killed in that period were between 20 and 40 years old, and the breakdown by race was far
        from proportional to the population. The full analysis, charts, and models are in the paper.
      </p>

      <h2>What it can&apos;t say</h2>
      <p>
        Incident data only records what was reported, and missing fields are common. In the age data, a value of zero
        means no age was recorded at all. A model trained on records like these describes the records. It can&apos;t
        settle the causes on its own.
      </p>
    </>
  );
}
