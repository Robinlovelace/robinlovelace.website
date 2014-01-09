require 'jekyll/scholar'
module Jekyll
  class Scholar
    module Utilities

      def cite(key)
        context['cited'] ||= []
        context['cited'] << key

        if bibliography.key?(key)
          entry = bibliography[key]
          entry = entry.convert(*bibtex_filters) unless bibtex_filters.empty?

          citation = CiteProc.process entry.to_citeproc, :style => style,
            :locale => config['locale'], :format => 'html', :mode => :citation

          link_to "##{[prefix, entry.key].compact.join('-')}", citation.join
        else
          missing_reference
        end
    end
  end
end
