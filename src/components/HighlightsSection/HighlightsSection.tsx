export function HighlightsSection() {
  return (
    <div>
      <h2 className="resume-section-header">
        <svg className="resume-icon" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
        Professional Highlights
      </h2>
      <div>
        <ul className="bullet-list in">
          <li className="leading-relaxed">
            Played a key leadership role, both as an executive or founder,in guiding three companies from inception to successful exits.
          </li>
          <li>
            Participated in and played a key role in multiple successful fundraising rounds.
          </li>
          <li>
            In 2023 I brought a generative AI image app from idea to production. This used a diffusion model which I fine-tuned based on 
            proprietary data. This app saw more than 100,000 uses during the beta launch.
          </li>
          <li>
            On multiple occasions I have guided an organization through technical due-diligence, both for investment and for acquisition. 
          </li>
          <li>
          Founded a company in 2016 a Technical Co-Founder. I created and launched the initial products of this company which were acquired 
          2 years later. 
          </li>
        </ul>
      </div>
    </div>
  );
}
