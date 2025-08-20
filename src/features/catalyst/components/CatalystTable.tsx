import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { catalystData, RelatedContentIcons } from "@/features/catalyst";
import Link from "next/link";

export const CatalystTable = () => {
  return (
    <div className="xl:max-w-[1024px] max-w-full">
      <Card className="py-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="sm:py-4 py-2 sm:px-5 px-4">
                Company
              </TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Molecule</TableHead>
              <TableHead>Modality</TableHead>
              <TableHead>Mechanism</TableHead>
              <TableHead>Disease Area</TableHead>
              <TableHead>Approved Indications</TableHead>
              <TableHead>LTM Sales</TableHead>
              <TableHead>Phase</TableHead>
              <TableHead>Impact</TableHead>
              <TableHead>Timing</TableHead>
              <TableHead>Related Content</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {catalystData.map((catalyst, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium sm:py-6 py-2 sm:px-5 px-4">
                  {catalyst.company}
                </TableCell>
                <TableCell>{catalyst.brand}</TableCell>
                <TableCell>{catalyst.molecule}</TableCell>
                <TableCell>
                  <Link href="/" className="underline">
                    {catalyst.modality}
                  </Link>
                </TableCell>
                <TableCell>{catalyst.mechanism}</TableCell>
                <TableCell>{catalyst.diseaseArea}</TableCell>
                <TableCell>{catalyst.approvedIndications}</TableCell>
                <TableCell className="font-medium">
                  {catalyst.ltmSales}
                </TableCell>
                <TableCell>{catalyst.phase}</TableCell>
                <TableCell>{catalyst.impact}</TableCell>
                <TableCell>{catalyst.timing}</TableCell>
                <TableCell>
                  <RelatedContentIcons content={catalyst.relatedContent} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
