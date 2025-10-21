export default function Demo() {
  return (
    <div className="project-section">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Try It Out
      </h2>
      <div className="flex flex-col gap-3">
        <p>
          There is a test account with fake transactions available for you to try out the app.
        </p>
        <p>
          <a href="https://budgeting.griffinmahoney.me" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
            https://budgeting.griffinmahoney.me
          </a>
        </p>
        <p>
          The username is <span className="font-bold">testuser_account_2@example.com</span> and the password is <span className="font-bold">TestUser123!</span>.
        </p>
      </div>
    </div>
  );
}
