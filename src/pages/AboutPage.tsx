
const profile = {
  name: 'ธนภัทร ผิวหอม',
  studentId: '1680705280',
  section: '227A',
}

function AboutPage() {
  return (
    <div className="card mx-auto max-w-sm bg-base-100 shadow-md">
      <div className="card-body items-center gap-2">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-pink-200 bg-pink-500 text-5xl font-bold text-white">
          {profile.name.charAt(0)}
        </div>
        <h1 className="mt-2 text-2xl font-extrabold">{profile.name}</h1>

        <dl className="mt-4 w-full divide-y divide-base-300 text-sm">
          <div className="flex justify-between py-2">
            <dt className="text-base-content/60">รหัสนักศึกษา</dt>
            <dd className="font-semibold">{profile.studentId}</dd>
          </div>
          <div className="flex justify-between py-2">
            <dt className="text-base-content/60">Section</dt>
            <dd className="font-semibold">{profile.section}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default AboutPage
