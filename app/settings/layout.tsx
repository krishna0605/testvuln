import SettingsNav from "@/components/SettingsNav";
import SettingsHeader from "@/components/settings/SettingsHeader";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SettingsHeader />
      <main className="w-full grow">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-text-heading text-4xl font-bold tracking-tight">Settings</p>
            <p className="text-text-body text-base mt-2">Manage your profile, preferences, and workspace settings.</p>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <SettingsNav />
            <div className="flex-1">
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SettingsLayout;
